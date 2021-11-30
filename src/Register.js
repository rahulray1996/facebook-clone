import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './Register.css';

function Register() {
    const history = useHistory('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = (event) => {
        event.preventDefault();
    }    

    return (
        <div className="register">
            <div className="register__container">
                <h1>Create A New Account</h1>
                <h3>Its quick an easy</h3>
                <form>
                    <center>
                        <input type="name" onChange={(e) => setFirstName(e.target.value)} className="register__name" placeholder="First Name" />
                        <input type="nmae" onChange={(e) => setLastName(e.target.value)} className="register__name" placeholder="Last Name" />
                    </center>
                    <center>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    </center>
                    <center>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    </center>
                    <h5 className="register__date">Date Of Birth</h5>

                    <div className="row" >
                        <select className="register__date2">
                            <option value="Day">Day</option>
                            <option value="Day">01</option>
                            <option value="Day">02</option>
                            <option value="Day">03</option>
                            <option value="Day">04</option>
                            <option value="Day">05</option>
                            <option value="Day">06</option>
                            <option value="Day">07</option>
                            <option value="Day">08</option>
                            <option value="Day">09</option>
                            <option value="Day">10</option>
                            <option value="Day">11</option>
                            <option value="Day">12</option>
                            <option value="Day">13</option>
                            <option value="Day">14</option>
                            <option value="Day">15</option>
                            <option value="Day">16</option>
                            <option value="Day">17</option>
                            <option value="Day">18</option>
                            <option value="Day">19</option>
                            <option value="Day">20</option>
                            <option value="Day">21</option>
                            <option value="Day">22</option>
                            <option value="Day">23</option>
                            <option value="Day">24</option>
                            <option value="Day">25</option>
                            <option value="Day">26</option>
                            <option value="Day">27</option>
                            <option value="Day">28</option>
                            <option value="Day">29</option>
                            <option value="Day">30</option>
                            <option value="Day">31</option>
                        </select>

                        <select className="register__date3">
                            <option value="Day">Month</option>
                            <option value="Day">January</option>
                            <option value="Day">February</option>
                            <option value="Day">March</option>
                            <option value="Day">April</option>
                            <option value="Day">May</option>
                            <option value="Day">June</option>
                            <option value="Day">July</option>
                            <option value="Day">August</option>
                            <option value="Day">September</option>
                            <option value="Day">October</option>
                            <option value="Day">November</option>
                            <option value="Day">December</option>
                        </select>

                        <select className="register__date3">
                            <option value="Year">Year</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                            <option value="1989">1989</option>
                            <option value="1988">1988</option>
                            <option value="1987">1987</option>
                            <option value="1986">1986</option>
                            <option value="1985">1985</option>
                            <option value="1984">1984</option>
                            <option value="1983">1983</option>
                            <option value="1982">1982</option>
                            <option value="1981">1981</option>
                            <option value="1980">1980</option>
                            <option value="1979">1979</option>
                            <option value="1978">1978</option>
                            <option value="1977">1977</option>
                            <option value="1976">1976</option>
                            <option value="1975">1975</option>
                            <option value="1974">1974</option>
                            <option value="1973">1973</option>
                            <option value="1972">1972</option>
                            <option value="1971">1971</option>
                            <option value="1970">1970</option>
                            <option value="1969">1969</option>
                            <option value="1968">1968</option>
                            <option value="1967">1967</option>
                            <option value="1966">1966</option>
                            <option value="1965">1965</option>
                            <option value="1964">1964</option>
                            <option value="1963">1963</option>
                            <option value="1962">1962</option>
                            <option value="1961">1961</option>
                            <option value="1960">1960</option>
                        </select>
                    </div>
                        
                                
                    <h5 className="register__gender">Gender</h5>

                    <div className="register__radiocontainer">
                        <input type="radio" name="gender" value="Male" />
                        <label>Male</label>
                        <input type="radio" name="gender" value="Female" />
                        <label>Female</label>
                        <input type="radio" name="gender" value="Other" />
                        <label>Other</label>
                    </div>

                    <p className="register__policy">By clicking Sign Up, you agree to our{""} <span>Terms, Data Policy</span> and <span>Cookie Policy</span>. You may recieve SMS and notifications from us and can opt out at any time.</p>

                        <center>
                            <button onClick={register} type="submit" className="register__register">Register</button>
                        </center>
                </form>
            </div>
        </div>
    )
}

export default Register;
