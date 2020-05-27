import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext.js';
import { AuthContext } from '../contexts/AuthContext.js';

const Navbar = () => {
  /**
   * use 2 context in one fun component 
   * this way of invoke context, can be used with fun component only!
   * @Note this way is useful when you want to use a lot of context in one component
  */
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={() => toggleAuth()}>
        { isAuthenticated ? 'Logged in' : 'Logged out' }
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
   
export default Navbar;

/**
 * way 2 to access context
 * this way can be used in both class/fun component
 */

 /*
class Navbar extends Component {
    static contextType = ThemeContext;
    state = {  }
    render() {
        return (
            <ThemeContext.Consumer>
                {(context) => {
                    const { isLightTheme, light, dark } = context;
                    const theme = isLightTheme ? light : dark;
                    return(
                        <nav style={{background: theme.ui, color: theme.syntax}}>
                            <h1>Context app</h1>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    )
                }}
            </ThemeContext.Consumer>
        );
    }
}
*/