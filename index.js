let data={
    name:"Mutual Funds",
    cost:10000
}



const form=document.querySelector('form');
const nameInput=document.querySelector('#name');
const costInput=document.querySelector('#cost');


form.addEventListener('submit',(e)=>{
    e.preventDefault();

    if(nameInput.value==='' || costInput.value==='' || isNaN(costInput.value)){
        alert("Please enter correct values");
    }else{
        let item={name:nameInput.value, cost:parseInt(costInput.value)};
        console.log(item);
        db.collection('Investments').add(item).then((res)=>{
            console.log("Added item ")
        })
    }
    
})

// console.log(db);