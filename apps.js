let url = 'http://hanapha.com/feed/';

const textarea = document.querySelector('#text-wrapper');

feednami.load(url)
.then(feed => {
    textarea.value = ''
    for(let bob of feed.entries){
        //create a list element
        let li = document.createElement('li');
        //add HTML content to list items
        //li.innerHTML = `<h4><a href="${bob.link}">${bob.title}</a><p> ${bob.description}</p></h4>`;
        //only title
        li.innerHTML = `<h4><a href="${bob.link}">${bob.title}</a>`;
        //append HTML content to list 
        textarea.appendChild(li);
    }
});