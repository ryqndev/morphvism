import React, {useState, useEffect} from 'react';
import Dropdown from 'react-dropdown'
import {withRouter} from 'react-router-dom';
import 'react-dropdown/style.css'
import './Form.scss';
import user from './Firebase';

const Form = ({ history }) => {
    const [equation, setEquation] = useState('');
    const [variables, setVariables] = useState(new Set());
    const [var1, setVar1] = useState("");
    const [var2, setVar2] = useState("");
    const [var1Domain, setVar1Domain] = useState([-10, 10]);
    const [var2Domain, setVar2Domain] = useState([-10, 10]);
    const [fixed, setFixed] = useState(null);
    const [created, setCreated] = useState(false);

    useEffect(() => {
        let totalVariables = new Set();
        for(let i = 0; i < equation.length; i++){
            let letter = equation.charAt(i);
            if((letter.toLowerCase() !== letter.toUpperCase()) && letter !== 'i' && letter !== 'e'){
                totalVariables.add(letter);       
            }
        }
        setVariables(totalVariables);
    }, [equation]);

    useEffect(() => {
        if(var1 === "" || var2 === ""){
            return;
        }
        let fixedVariables = [...variables];
        let fixedVariablesWithValues = {}

        let index = fixedVariables.indexOf(var1);
        fixedVariables.splice(index, 1);
        index = fixedVariables.indexOf(var2);
        fixedVariables.splice(index, 1);
        
        fixedVariables.forEach(e => {
            fixedVariablesWithValues[e] = 0;
        })
        setFixed(fixedVariablesWithValues);
    }, [var1, var2, variables]);

    const updateEquation = (event) => {
        setEquation(event.target.value);
    }
    const updateVar1 = (event) => {
        setVar1(event.value);
    }
    const updateVar2 = (event) => {
        setVar2(event.value);
    }
    const submitEquation = () => {
        let data = {
            eq: equation,
            var1: var1,
            var2: var2,
            v1dom: var1Domain,
            v2dom: var2Domain,
            fixed: fixed
        }
        // console.log(data.eq);
        user.add(data);
        fetch('https://hidden-eyrie-79468.herokuapp.com/tree_hacks?data=' + encodeURIComponent(JSON.stringify(data)))
        .then(response => {
            setCreated(true);
        })
        .catch(err => {
            setCreated(true);
        })
    }

    return (
        <div className="form">
            <h3>Create a visual</h3>
            <p>Expression:</p>
            <input type="text" value={equation} onChange={updateEquation} placeholder="Ex.) x + y + z"/>
            <div className="free-vars">
                <h3>
                    Free Variables
                </h3>
                <div className="dropdown-wrapper">
                    <label>
                        Var 1:
                    </label>
                    <Dropdown 
                        options={[...variables]}
                        onChange={updateVar1}
                        value={var1}
                        placeholder="Select an option" 
                    />
                    <span>└─</span><DomainInput domain={var1Domain} setDomain={setVar1Domain} />
                </div>
                <div className="dropdown-wrapper">
                    <label>
                        Var 2:
                    </label>
                    <Dropdown
                        options={[...variables]}
                        onChange={updateVar2}
                        value={var2}
                        placeholder="Select an option"
                    />
                    <span>└─</span><DomainInput domain={var2Domain} setDomain={setVar2Domain} />
                </div>
            </div>
            <div className="free-vars">
            <h3>
                Fixed Variables
            </h3>
            {fixed !== null && (
                <div>
                    {JSON.stringify(fixed)}
                </div>
            )}
            </div>
            <button onClick={submitEquation}>
                submit
            </button>
            {
                created && (
                    <button onClick={() => {
                        history.push('./view/' + encodeURI(JSON.parse(localStorage.getItem('user')).id));
                    }}>
                        join room
                    </button>
                )
            }
            <br />
            {
                created && (
                    <div className="confirmed">
                        Room Link: {JSON.parse(localStorage.getItem('user')).id}
                    </div>
                )
            }
        </div>  
    );
}

const DomainInput = ({domain, setDomain}) => {
    const updateDomain = (event) => {
        let index = event.target.name;
        let newDomain = [...domain];
        newDomain[index] = Number(event.target.value);
        setDomain(newDomain);
    }
    return (
        <p>Domain: [ 
            <input type="text" name="0" value={domain[0]} onChange={updateDomain} />
            ,
            <input type="text" name="1" value={domain[1]} onChange={updateDomain}/>
            ]
        </p>
    );
}
export default withRouter(Form);