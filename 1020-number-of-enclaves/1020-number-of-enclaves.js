/**
 * @param {number[][]} grid
 * @return {number}
 */

var numEnclaves = function(grid) {
    const h = grid.length;
    const w = grid[0].length;
    const visited = Array.from({length : h},()=>Array(w).fill(0));
    let closeIsland = 0;

    const queue = [];
    let count = 1;

    const dx = [0,1,0,-1];
    const dy = [-1,0,1,0];

    for(let a = 0; a < h; a++){
        for(let b = 0; b < w; b++){
            if(grid[a][b] === 1 && visited[a][b] === 0){
                queue.push([a,b]);
                visited[a][b] = count;
                let isClose = true;
                let numOfIsland = 0;

                if(a === 0 || b === 0 || a === h - 1 || b === w - 1)    isClose = false;

                while(queue.length){
                    const [Y,X] = queue.shift();
                    numOfIsland++
                    for(let i = 0; i < 4; i++){
                        const nx = X + dx[i];
                        const ny = Y + dy[i];

                        if(
                            nx < 0 ||
                            ny < 0 ||
                            nx >= w ||
                            ny >= h 
                        )   continue;

                        if(visited[ny][nx] !== 0)   continue;

                        if(grid[ny][nx] === 1 ){
                            visited[ny][nx] = count;
                            queue.push([ny,nx]);
                            if(ny === 0 || nx === 0 || ny === h - 1 || nx === w - 1)    isClose = false;
                        }
                    }
                }
                count++;
                if(isClose) closeIsland+=numOfIsland;
            }
        }
    }
    return closeIsland
}