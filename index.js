(function () {
    const columnIndex = 14;
    const rowSelector = 'tr.cebra';

    return Array
        .from(document.querySelectorAll(rowSelector))
        .map(row => row.querySelector(`td:nth-child(${columnIndex})`))
        .map(td =>  td && (rg = td.textContent.match(/\$\s(\d{1,3}(,\d{3})*)\.00/)) != null ? rg[1].replace(',', '') : "0" || 0)
        .reduce((carry, num) =>carry + parseInt(num), 0);
})();