Object.values = Object.values ? Object.values : x =>
    Object.keys(x).reduce((y, z) =>
    y.push(x[z]) && y, []);

Object.entries = Object.entries ? Object.entries : x =>
    Object.keys(x).reduce((y, z) =>
    y.push([z, x[z]]) && y, []);