fetch('https://www.globalpacademy.com').then(r=>r.text()).then(h=>console.log(h.match(/assets\/[^\"]+\.css/g)))
