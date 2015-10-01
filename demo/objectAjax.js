/**
 * Created by vet on 19.09.15.
 */
function getXmlHttpRequest(){
    if(window.XMLHttpRequest){
        try{
            return new XMLHttpRequest();
        }catch(e){}
    }else if(window.ActiveXObject){
        try{
            return new ActiveXObject("Msxml2.XMLHTTP");
        }catch(e){}

        try{
            return new ActiveXObject("Micrpsoft.XMLHTTP")
        }catch(e){}
    }
    return null;
}