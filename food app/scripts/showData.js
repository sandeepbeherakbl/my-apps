async function getData(url){

    let res = await fetch(url)
    let data = await res.json()

    return data

}

function append(data, container){

    data.meals.forEach((el) => {

        let div = document.createElement('div')

        let p_cat = document.createElement('h1');
        p_cat.setAttribute('class' , 'mainhead')
        p_cat.innerText = el.strCategory;

        let p_ins = document.createElement('p');
        p_ins.setAttribute('class' , 'mainins')
        p_ins.innerText = el.strInstructions;

        let img = document.createElement('img');
        img.setAttribute('class' , 'containerimage')
        img.src = el.strMealThumb

        // let a = document.createElement('a')
        // a.href = el.strYoutube
        // console.log(a);

        console.log(el);
        //strIngredient
        let divOne = document.createElement('div')

        for(var i=1; i<=10;i++){
            let ing = document.createElement('p')
            ing.setAttribute('class' , 'ingredient')
            ing.innerText = el[`strIngredient${i}`]
            divOne.append(ing)
        }

        var h = document.createElement('h2');
        var t = document.createTextNode("Ingredient");
        h.setAttribute('class' , 'iheeading')
        h.appendChild(t);

        div.append(p_cat,img, p_ins,h, divOne );

        container.append(div)
    })

}


async function searchReceipe(){

    let query = document.getElementById("search").value
    let res = await fetch(`http://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    let data = await res.json();
    console.log(data);
}

export {getData, append, searchReceipe}


