document.getElementById('rtl').oninput = cssGenerator;
document.getElementById('rtr').oninput = cssGenerator;
document.getElementById('rbr').oninput = cssGenerator;
document.getElementById('rbl').oninput = cssGenerator;


function cssGenerator() {
    var block = document.getElementById('wrapper'),
        rtl = document.getElementById('rtl').value,
        ttl = document.getElementById('ttl'),
        rtr = document.getElementById('rtr').value,
        ttr = document.getElementById('ttr'),
        rbr = document.getElementById('rbr').value,
        tbr = document.getElementById('tbr'),
        rbl = document.getElementById('rbl').value,
        tbl = document.getElementById('tbl'),
        out = document.getElementById('out');

    ttl.value = rtl;
    ttr.value = rtr;
    tbr.value = rbr;
    tbl.value = rbl;

    block.style.borderRadius = rtl + 'px ' + rtr + 'px ' + rbr + 'px ' + rbl + 'px';
    out.innerHTML = '-webkit-border-radius: ' + rtl + 'px ' + rtr + 'px ' + rbr + 'px ' + rbl + 'px; \n'
    out.innerHTML += 'border-radius: ' + rtl + 'px ' + rtr + 'px ' + rbr + 'px ' + rbl + 'px;'
}
