let dims = { height: 400, width: 400, radius: 150 };

const container = d3.select('.graph-container')
const svg = container.append('svg')
        .attr('height', dims.height+150)
        .attr('width', dims.width+150)

const graph = svg.append('g')
        .attr('height', dims.height)
        .attr('width', dims.width)
        .attr('transform',`translate(${(dims.width/2)+75},${(dims.height/2) + 75 })`);

const pie = d3.pie()
        .sort(null)
        .value(d => d);

const arc = d3
        .arc()
        .outerRadius(dims.radius)
        .innerRadius(0);

graph.selectAll('path').data(pie([1, 2,3,4]))
        .enter()
        .append('path')
        .attr('d', d => arc(d))
        .attr('fill', (d, i) => (i % 2 == 0) ? 'orange' : 'red');







let render = (values => {
    console.log(values);
})
let values = [];

db.collection('Investments').onSnapshot((res) => {
    res.docChanges().forEach((change) => {
        let doc = { ...change.doc.data(), id: change.doc.id };

        if (change.type == 'added') {
            values.push(doc);
        } else if (change.type == 'modified') {
            values.map(item => {
                if (item.id === doc.id) {
                    item.cost = doc.cost;
                }
            });
        }
        else if (change.type == "removed") {
            values = values.filter(item => item.id !== doc.id);
        }
    });
    // render(values);
})