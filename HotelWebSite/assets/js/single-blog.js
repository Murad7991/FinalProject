//Fetch SingleNews Section

const fetchSingleNews = async () => {
    let newArr = []
    const response = await fetch('https://murad-mentor-default-rtdb.firebaseio.com/news.json')
    const data = await response.json()
    for (let key in data) {
        newArr.push(data[key])
    }
    return newArr
}

const id = window.location.search.slice(4,50)


let main = document.querySelector('.main')
let blogImage = document.querySelector('.single-blog-img')
let description = document.querySelector('.single-blog-description')

fetchSingleNews().then(res => {
    const newRes = res.filter(item => Number(item.id) == Number(id))
    for (let item of newRes) {
        main.innerHTML = `<h3>${item.blogsData.title}</h3>
            <div class="author">
                <a href="#"><i class="fa-solid fa-calendar-days"></i> ${item.nowDate}</a>
                <a href="#">/ by Joe Fylan</a>
            </div>`
        blogImage.innerHTML = `<img src="${item.img}" alt="blog-img"/>`
        description.innerHTML = `<p>${item.blogsData.description}</p>
                    <div class="description-bottom">
                        <ul>
                            <li>${item.blogsData.tags}</li>
                        </ul>
                        <div class="share-social">
                            <span>Share:</span>
                            <ul>
                                <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-google-plus-g"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i class="fa-solid fa-envelope"></i></a></li>
                            </ul>
                        </div>
                    </div>`
    }
})


//Fetch RecentNews Section

let recentBlogs = document.querySelector('.recent-news-boxes')

fetchSingleNews().then(res => {
    let recentNews = res.slice(res.length-4, res.length).reverse()
    recentNews.map(data => {
        recentBlogs.innerHTML += `<div class="recent-news-box">
                            <div class="recent-news-box-img">
                                <img src="${data.img}"  alt="recent-news-img"/>
                            </div>
                            <div class="recent-news-title">
                                <a href="./single-blog.html?id=${data.id}">${data.nowDate} / ${data.blogsData.event} </a>
                                <h2><a href="./single-blog.html?id=${data.id}">${data.blogsData.title}</a></h2>
                            </div>
                        </div>`
    })
}).catch(err => {
    console.log(err)
})


// Form Validation and Send Info

let name = document.querySelector('#name')
let email = document.querySelector('#email');
let web = document.querySelector('#web')
let discussion = document.querySelector('#discussion')


const button = document.querySelector('#message')
button.addEventListener('click', (e)=> {
    e.preventDefault();
    let nameValid = document.querySelector('#nameValidation')
    let emailValid = document.querySelector('#emailValidation')
    let discussionValid = document.querySelector('#discussionValidation')
    let webValid = document.querySelector('#webValidation')
    if (name.value.trim() && email.value.trim() && discussion.value.trim() && web.value.trim()) {
        axios({
            method: "post",
            url: 'https://murad-mentor-default-rtdb.firebaseio.com/comment.json',
            data: {
                name: name.value,
                email: email.value,
                discussion: discussion.value,
                web: web.value
            }
        })
            .then(() => {
                swal("Mesajınız uğurla göndərildi")
            })
        name.value = ''
        discussion.value = ''
        email.value = ''
        web.value = ''
    } else {
        function hiddenError() {
            nameValid.style.display = 'none'
            emailValid.style.display = 'none'
            discussionValid.style.display = 'none'
            webValid.style.display = 'none'
        }
        if (name.value === null || name.value === ""){
            nameValid.style.display = 'block'
            window.setInterval(hiddenError, 3000)
            return false;
        } else if(email.value.length<9){
            emailValid.style.display = 'block'
            window.setInterval(hiddenError, 3000)
            return false;
        }else if (discussion.value === null || discussion.value === "") {
            discussionValid.style.display = 'block'
            window.setInterval(hiddenError, 3000)
            return false;
        }  else if(web.value.length<2){
            webValid.style.display = 'block'
            window.setInterval(hiddenError, 3000)
            return false;
        }
    }
})


const subscribe = document.querySelector('#subscribe')

subscribe.addEventListener('click', () => {
    const email = document.querySelector('#emailSubscribe')
    if (email.value.trim().length < 9) {
        swal("Email adresinizi düzgün qeyd edin")
    } else {
        swal("Subscribed :)")
        email.value = ''
    }
})
