const text = document.querySelector('h3');
const p = document.querySelector('p');
const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2');
const content = document.querySelector('body');



const apiRequest = async() =>{
    text.textContent = '';
    p.textContent = '';
    const span = document.createElement('span');
    span.textContent = 'Loading. . . ';
    content.appendChild(span);

    const request = await fetch('https://v2.jokeapi.dev/joke/Programming');
    console.log(request);
    const resRequest = await request.json();
    console.log(resRequest);
    const setup = resRequest.setup;
    const delivery = resRequest.delivery;
    
    console.log(setup);

    setTimeout( () => {
        span.remove();
        if(setup){
            text.textContent = setup;
            p.textContent = delivery;
    
        }else{
            alert('non ci sono proprietà')
        };
    },2000);
    
}
btn.addEventListener('click', apiRequest);


const arrJokes = async () => {
    const span = document.createElement('span');
    span.textContent = 'Loading. . . ';
    content.appendChild(span);

    const request = await fetch('https://v2.jokeapi.dev/joke/Any?amount=10');
    console.log(request);
    const res = await request.json();
    // console.log(res.jokes);
    const programming = res.jokes.filter(obj => {
    return obj.category === 'Programming';
    });
    programming.map(item =>{
        // const h2 = document.createElement('h2');
        // h2.textContent = item.joke;
        // content.appendChild(h2);
        setTimeout( () => {
            span.remove();
            if(item.joke){
                const h2 = document.createElement('h2');
                h2.textContent = item.joke;
                content.appendChild(h2);
            }
        },2000);
        console.log(`❤`,programming + ' this is an Obj' );
        console.log(`💪`,'ITEM : ' + ' ' + item.joke);
    });
}
btn2.addEventListener('click', arrJokes);



