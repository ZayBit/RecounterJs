window.addEventListener('DOMContentLoaded', function () {
    RecountsInit();
})
window.addEventListener('scroll', function () {
    RecountsInit();
})

function decimal(num) {
    num = num.toString().replace(/(\d)(\d{3})$/, '$1,$2');
    return num;
}
function RecountsInit() {
    const Recounts = document.querySelectorAll('.recount');
    Recounts.forEach((Recount) => {

        function FadeIn(styles) {
            (styles == undefined) ? styles = `opacity:0;` : styles;
            let ParentRecount = Recount.parentElement.dataset.parentfadein;
            let span_counter = Recount.querySelector('.count');
            if (ParentRecount && ParentRecount == 'yes') {
                if (Recount.parentElement.style.opacity < 1) {
                    Recount.parentElement.style = styles;
                }
            } else {
                if (span_counter) {
                    if (span_counter.style.opacity < 1) {
                        span_counter.style = styles
                    }
                }
            }
        }
        let top = (Recount.getBoundingClientRect().top <= window.innerHeight) ? 0 : Recount.getBoundingClientRect().top;
        FadeIn();
        if (window.scrollY >= top && Recount.children.length <= 0) {

            Recount.innerHTML = `<span class="count">0</span>`;
            const span_counter = Recount.querySelector('.count');

            FadeIn();

            let Recount_data = Recount.dataset,
                data_time = (Recount_data.time == undefined) ? 600 : Recount_data.time ,
                data_recount = Recount_data.recount,
                data_delay = (Recount_data.delay == undefined) ? '600ms' : Recount_data.delay,
                counter = 0;

            setTimeout(() => {
                FadeIn(`transition:all ${data_delay} ease;opacity:1;`);
                let interval = setInterval(() => {
                    counter++;
                    let total_recount = parseInt(Math.round(counter * (data_recount / data_time)));
                    span_counter.innerHTML = decimal(total_recount);
                    if (total_recount == data_recount) {
                        clearInterval(interval);
                    }
                })
            }, 200);

        }
    })
}


