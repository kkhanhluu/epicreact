const express = require('express');
const path = require('path');

const app = express();
app.use(
  '/react-fundamentals',
  express.static(path.join(__dirname, 'react-fundamentals/build'))
);
app.use(
  'react-fundamentals/*',
  express.static(path.join(__dirname, '/react-fundamentals/build/index.html'))
);

app.use(
  '/react-hooks',
  express.static(path.join(__dirname, 'react-hooks/build'))
);
app.use(
  'react-hooks/*',
  express.static(path.join(__dirname, '/react-hooks/build/index.html'))
);

app.use(
  '/advanced-react-hooks',
  express.static(path.join(__dirname, 'advanced-react-hooks/build'))
);
app.use(
  'advanced-react-hooks/*',
  express.static(path.join(__dirname, '/advanced-react-hooks/build/index.html'))
);

app.use(
  '/advanced-react-patterns',
  express.static(path.join(__dirname, 'advanced-react-patterns/build'))
);
app.use(
  'advanced-react-patterns/*',
  express.static(
    path.join(__dirname, '/advanced-react-patterns/build/index.html')
  )
);

app.use(
  '/testing-react-apps',
  express.static(path.join(__dirname, 'testing-react-apps/build'))
);
app.use(
  'testing-react-apps/*',
  express.static(path.join(__dirname, '/testing-react-apps/build/index.html'))
);

app.use(
  '/react-performance',
  express.static(path.join(__dirname, 'react-performance/build'))
);
app.use(
  'react-performance/*',
  express.static(path.join(__dirname, '/react-performance/build/index.html'))
);

app.use(
  '/react-suspense',
  express.static(path.join(__dirname, 'react-suspense/build'))
);
app.use(
  'react-suspense/*',
  express.static(path.join(__dirname, '/react-suspense/build/index.html'))
);
app.use('*', express.static(path.join(__dirname, 'index.html')));

app.listen(5454, () => console.log('App running on port 5454...'));
