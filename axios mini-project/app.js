

const getBtn = document.getElementById('get-btn')
const postBtn = document.getElementById('post-btn')

const getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
            showOutput(res)
        })
}

const postData = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
        userId: 2,
        id: 2,
        title: "Hi... ",
        body: 'This Is A Axios test'
    })
        .then(res => {
            console.log(res)
        })
}

function showOutput(result) {
    document.getElementById('res').innerHTML = `
    <div class="card ">
      <h2>Status: ${result.status}</h2>
      <p >user Id: ${JSON.stringify(result.data.userId)} </p>
      <p>id: ${JSON.stringify(result.data.id)}</p>
      <p>Title: ${JSON.stringify(result.data.title)}</p>
      <p>Content: ${JSON.stringify(result.data.body)}</p>

    </div>`}

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', postData);