// 处理导航栏高亮显示当前页面的情况
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav ul li a');
    const currentPage = window.location.pathname.split('/').pop();
    const currentHref = `./${currentPage}`;

    links.forEach(link => {
        if (link.href === currentHref) {
            link.classList.add('active');
        }
    });

    const inverseimagingTable = document.getElementById('inverseimaging');
    if (inverseimagingTable) {
        const inverseimagingTbody = inverseimagingTable.querySelector('tbody');
        Array.from(inverseimagingTbody.rows).forEach(row => {
            const cells = Array.from(row.cells);
            cells.forEach((cell, index) => {
                const allCellsInColumn = Array.from(inverseimagingTbody.rows).map(row => row.cells[index]);
                const maxValue = Math.max(...allCellsInColumn.map(c => parseFloat(c.innerText)));
                const secondMaxValue = Math.max(...allCellsInColumn.filter(c => parseFloat(c.innerText) !== maxValue).map(c => parseFloat(c.innerText)));
    
                if (parseFloat(cell.innerText) === maxValue) {
                    cell.classList.add('bold');
                }
                if (parseFloat(cell.innerText) === secondMaxValue) {
                    cell.classList.add('underline');
                }
            });
        });
    }
    
    // 对 forwardsimulation 每一列的最小值加粗，对每一列的第二小的值加下划线
    const forwardsimulationTable = document.getElementById('forwardsimulation');
    if (forwardsimulationTable) {
        const forwardsimulationTbody = forwardsimulationTable.querySelector('tbody');
        Array.from(forwardsimulationTbody.rows).forEach(row => {
            const cells = Array.from(row.cells);
            cells.forEach((cell, index) => {
                const allCellsInColumn = Array.from(forwardsimulationTbody.rows).map(row => row.cells[index]);
                const minValue = Math.min(...allCellsInColumn.map(c => parseFloat(c.innerText)));
                const secondMinValue = Math.min(...allCellsInColumn.filter(c => parseFloat(c.innerText) !== minValue).map(c => parseFloat(c.innerText)));
    
                if (parseFloat(cell.innerText) === minValue) {
                    cell.classList.add('bold');
                }
                if (parseFloat(cell.innerText) === secondMinValue) {
                    cell.classList.add('underline');
                }
            });
        });
    }
});