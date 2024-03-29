let titles = ['#','#H','#HG','#HG R','#HG RU','#HG RUN','#HG RUNS','#HG RUNS Y','#HG RUNS YO','#HG RUNS YOU']
let index = 0
let interval = setInterval(() => {
    document.title = titles[index]
    index += 1
    if (index === titles.length) index = 0
}, 500)