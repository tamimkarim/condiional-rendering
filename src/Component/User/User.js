import React from 'react';

const User = (props) => {
    const familiar = props.familiar;
    let greetings;
    if(familiar){
        greetings = <p>Welcome, my friend.</p>

    }
    else{
        greetings =  <p>Who the hell are you?</p>

    }
    return (
        <div>
            <div>
                <h2>Greeting</h2>
                {greetings}
            </div>
            <div>
                <h2>Food</h2>
                <p>I will buy food for you.</p>
                <p>Lets eat his his whose whose?</p>

            </div>

        </div>
    );
};

export default User;