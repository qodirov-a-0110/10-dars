
// const btn = document.querySelector('button');
// const wrapper = document.querySelector('#wrapper');

// btn.addEventListener('click' , function(event) {
//     event.preventDefault();

//     const image = document.createElement('img');
//     const randomId = Math.trunc(Math.random() * 500);
//     image.setAttribute('src', `https://picsum.photos/id/${randomId}/200/300`);
//     image.setAttribute('alt', 'Tabiat rasmi');
//     wrapper.innerHTML = '' ; 
//     wrapper.append(image);
// })


// UYGA VAZIFA 

const text = document.querySelector('#new-todo');
const button = document.querySelector('#add-btn');
const tayyor = document.querySelector('#tayyor');
const ochir = document.querySelector('#clear-btn')

button && button.addEventListener('click', function(event) {
    event.preventDefault();
    
    if (text.value.length != 0) {
        tayyor.append(text.value);
        text.value = ' '
        text.focus();
        text.style.outline = 'blue'
    }else{
    alert('input bosh');
    }
});

ochir && ochir.addEventListener('click', function(event) {
    event.preventDefault();

   
})

const btn = document.getElementById('showMessageButton')

btn && btn.addEventListener('click', () => {
    setTimeout(() => {
        document.getElementById('message').style.display = 'block';
    }, 5000); // 5 soniya
});
