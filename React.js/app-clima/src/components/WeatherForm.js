import React from 'react';

const WeatherForm = props =>{
    return(
        <div>
            <form>
                <div>
                    <input type='text' name='city' placeholder='Your City' autofocus/>
                </div>
                <div>
                    <input type='text' name='country' placeholder='Your Country'/>
                </div>
                <button>
                    Give a Weather
                </button>
            </form>
        </div>
    )
}

export default WeatherForm;