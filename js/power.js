/**
 * @author Kutsan Kaplan
 * http://kutsankaplan.com
 * 17/05/16 - 02:29
 */

function getResult()
{
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;

    document.getElementById("x").value = (b * c) / a;
}

setInterval("getResult()", 100);