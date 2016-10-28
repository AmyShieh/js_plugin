    function $(id){
        return document.getElementById(id);
    }
    var treeOne = $("treeOne");
    var treeOneFold = $("treeOneFold");
    var treeTwoFold = $("treeTwoFold");
    var treeTwo = $("treeTwo");
    var test = $("test");
    var testFold = $("testFold");
    function tree_fold(idClick,idFold){
        idClick.onclick = function(){
            if(idFold.style.display=="block"){
                idFold.style.display="none";
            }else{
                idFold.style.display="block";
            }
        }
    }
    tree_fold(treeOne,treeOneFold);
    tree_fold(treeTwo,treeTwoFold);
	tree_fold(test,testFold);