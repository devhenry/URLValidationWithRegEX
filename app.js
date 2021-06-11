
var parseUrlBtn = document.getElementById('parseUrl');
const set = (id ,text)=> {
    document.getElementById(id.replace("#","")).innerHTML = text;

}
parseUrlBtn.addEventListener("click",(event) =>{

    event.preventDefault()
    const ourUrl = document.getElementById('url').value;
    
    let createdUrl = document.createElement('a');
    createdUrl.setAttribute('href',ourUrl);
    const protocol = ourUrl.match(/^(https:\/\/)/g); //if ? is added after https:// it  validates ssl
    
    set('protocol',protocol  ? protocol [0] : '');

    if(protocol == "https://"){
        console.log('secured');
        alert('Url is secured with ssl');
    } else {
        console.log('not secured'); 
        alert('Url is not secured');
    }
    var seperateUrlValue = new URL(ourUrl)
    
   
    set('domain',createdUrl.hostname)
    set('path',createdUrl.pathname)
    set('search',createdUrl.search)
    //set('param',seperateUrlValue.searchParams.get('v'))


})