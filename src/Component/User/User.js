import React from 'react';

const User = (props) => {
    const familiar = props.familiar;
    let greetings;

    if(familiar){
        greetings = <p>Welcome, my friend</p>
    }
    else{
        greetings = <p>Who the hell are you?</p>
    }
    //JavaScript ternary operator
    // let food = familiar ? <p>I will buy food for you.</p>
    //                 :food = <p>Lets eat his his whose whose?</p>

    return (
        <div>
            <div>
                <h2>Greeting</h2>
                {greetings}
            </div>
            <div>
                <h2>Food</h2>
               
                {
                    familiar ? <p>I will buy food for you.</p> : <p>Sorry i am broke.</p>
                }
            </div>
            <div>
                <h2>Connection</h2>
                {
                    familiar && <p>Let's connect through facebook</p>
                }

                {/* <p>Let's connect through facebook</p>
                <p>I don't add stranger</p> */}


            </div>
        </div>
    );
};

export default User;