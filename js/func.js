function addLine(){
    var output="";
    var fCount = $("#fields .line").length; fCount++;
    // console.log(fCount);
    output += `<div class="ui-state-default"><div class="line row sortable-item">
    <div class="input-group mb-3 tex col-2">
        <select onchange="UpdateLineRow()" class="form-select" id="iGroup${fCount}">
            <option value="T" selected>T</option>
            <option value="s">s</option>
            <option value="D">D</option>
            <option value="i">i</option>
            <option value="Q">Q</option>
        </select>
        </div>
        <div class="form-floating mb-3 col-8">
            <textarea rows="3" class="form-control" id="misc${fCount}" wrap="hard" style="overflow-y: scroll; resize: none;" placeholder="Yes/No"></textarea>
            <label for="misc${fCount}">...</label>
        </div> 
    </div></div>`;
    
    return output;
}

function getSOPlist(gList,callback) {
    var sopListParse = gList.split(",");
    var output="";
    for (var i=0; i < sopListParse.length; i++){
        output += '<option value="'+sopListParse[i]+'">';
    }
    return output;
}

function getSOPs(SelectedSOP) {
    var sopParse = SelectedSOP.split(",");
    var output="";
    for (var i=0; i < sopParse.length; i++){
        output += '<option value="'+sopParse[i]+'">';
    }
    return output;
}

function OptionSelector(chk) {
    var opts = "";
    switch (chk){
        case "T":
            opts +=`<option selected value="T" >T</option>
            <option value="s">s</option>
            <option value="D">D</option>
            <option value="i">i</option>
            <option value="Q">Q</option>`;
            break;
        case "s":
            opts +=`<option value="T">T</option>
            <option selected value="s">s</option>
            <option value="D">D</option>
            <option value="i">i</option>
            <option value="Q">Q</option>`;
            break;
        case "D":
            opts +=`<option value="T" >T</option>
            <option value="s">s</option>
            <option selected value="D">D</option>
            <option value="i">i</option>
            <option value="Q">Q</option>`;
            break;
        case "i":
            opts +=`<option value="T" >T</option>
            <option value="s">s</option>
            <option value="D">D</option>
            <option selected value="i">i</option>
            <option value="Q">Q</option>`;
            break;
        case "Q":
            opts +=`<option value="T" >T</option>
            <option value="s">s</option>
            <option value="D">D</option>
            <option value="i">i</option>
            <option selected value="Q">Q</option>`;
            break;
        default:
            break;
    }
    return opts;
}


function InterpretImport(tex) {
    var rep = tex.replaceAll("\r\n","\n");
    var perline = rep.split("\n");
    output ="";
    for (var i=0; i < perline.length; i++){
        if ((perline[i]=="")||(perline[i]==" ")){

        } else {
            output += `<div class="ui-state-default"><div class="line row">
            <div class="input-group mb-3 tex col-2">
                <select onchange="UpdateLineRow()" class="form-select" id="iGroup${i}">
                    <option value="T" selected>T</option>
                    <option value="s">s</option>
                    <option value="D">D</option>
                    <option value="i">i</option>
                    <option value="Q">Q</option>
                </select>
                </div>
                <div class="form-floating mb-3 col-8" >
                    <textarea tabindex="-1" rows="3" class="form-control" id="misc${i}" wrap="hard" style="overflow-y: scroll; resize: none;" placeholder="Yes/No" readonly></textarea>
                    <label for="misc${i}">${perline[i]}</label>
                </div> 
            </div></div>`;}
    }
    // aria-label="Disabled input"
    return output;
}

function UpdateLineRow() {
    $('.removeLineRow').remove();
    $('.moveLineRow').remove();
    $('div.line.row > .tex').after('<div class="removeLineRow col-sm-1" style="display:none"><button type="button" class="btn btn-danger">x</button></div><div class="moveLineRow col-sm-1" style="display:none"><img style="background-color: #45a1ff; border-radius: 3px; padding: 9px;" src="css/arrow-down-up.svg"/></div>');
    
    var inputCount = $('.input-group.tex').length;
    for ($i=0; $i <= inputCount; $i++){
        var subset = $('#iGroup'+$i).val();
        console.log($i,subset);
        switch (subset) {
            case "T":
                $('#iGroup'+$i).removeClass("ms-0");
                $('#iGroup'+$i).removeClass("ms-2");
                $('#iGroup'+$i).removeClass("ms-4");
                $('#iGroup'+$i).addClass("ms-0");
                break;
                case "s":
                $('#iGroup'+$i).removeClass("ms-0");
                $('#iGroup'+$i).removeClass("ms-2");
                $('#iGroup'+$i).removeClass("ms-4");
                $('#iGroup'+$i).addClass("ms-2");
                break;
                default:
                $('#iGroup'+$i).removeClass("ms-0");
                $('#iGroup'+$i).removeClass("ms-2");
                $('#iGroup'+$i).removeClass("ms-4");
                $('#iGroup'+$i).addClass("ms-4");
                break;
        }
    }
    $('.sortables').sortable({
        handle: ".moveLineRow",
        placeholder: "ui-hilight"
    });
    // $('.sortables').disableSelection();



}
function lineEditable() {
    $("textarea").attr("readonly", false).removeAttr("tabindex");
}

