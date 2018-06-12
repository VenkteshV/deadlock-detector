var  _ =require('lodash');

const states = {
    Visited : 'Visited',
    Visiting: 'Visiting',
    NotVisited: 'NotVisited'
};
const Equal = (parents,node) => {
   
    var result = false;
    _.forEach(parents,(parent) => {
        
            result =   _.isEqual(parent,node) || result;
    })
    return result;
}
const depthFirstSearch = (node,edges,parents,visited,cycles) => {
    var state = visited[node] || '';
    if (state == states.Visited)
    return;
    else if(state == states.Visiting)
    {      
        if(Equal(parents,node)){      
        cycles.push(_.concat(parents,node));
    }
    }
    else
    {
        
        visited[node] = states.Visiting;
        parents.push(node);
        _.forEach(services[node],(child) => {
            depthFirstSearch(child, edges, parents, visited, cycles);
            
        });
        
        parents.splice(parents.length - 1,1);
        
        visited[node] = states.Visited;
    }
}
export const findCycles = (services) => {
    const nodes = Object.keys(services);
    var visited = {};
    var parents = new Array();
    var cycles = new Array();
    _.forEach(nodes,(node) => {
        const edges = services[node];
        depthFirstSearch(node,edges,parents,visited,cycles);
    })
    return cycles;
};
