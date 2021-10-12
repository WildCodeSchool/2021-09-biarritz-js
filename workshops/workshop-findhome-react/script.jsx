import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import Card from './components/Card';

const App = () => {
return (
    <>
        <Card image='https://st.hzcdn.com/simgs/pictures/piscines/superbe-villa-traditionnelle-et-contemporaine-benjamin-maxant-img~9db193e3046f0f67_4-9137-1-0858a59.jpg' title='Superbe villa' />
        <Card image='https://storage.googleapis.com/lf-wp-upload-a9b40dab/sites/10/2017/06/enhanced-buzz-15787-1295465739-20.jpg' title='Maison moche' />
    </>
)
}



ReactDOM.render(<App />, document.getElementById('app'));
