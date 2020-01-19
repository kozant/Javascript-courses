/* <div class="panel">
    <a href="#login_form" id="login_pop">Log In</a>
    <a href="#join_form" id="join_pop">Sign Up</a>
</div>

<i class="fas fa-user account"></i> */

let mainAccount = document.querySelector('.main');

if(!localStorage.getItem('person')) {
    let div = document.createElement('div');
    div.className = 'panel';

    let a1 = document.createElement('a');
    a1.setAttribute('href', '#login_form');
    a1.setAttribute('id', 'login_pop');
    a1.textContent = 'Log In'
    div.appendChild(a1);

    let a2 = document.createElement('a');
    a2.setAttribute('href', '#join_form');
    a2.setAttribute('id', 'join_pop');
    a2.textContent = 'Sing Up'
    div.appendChild(a2);

    mainAccount.appendChild(div);
} else {
    mainAccount.innerHTML = '<a href = "person.html"><i class="fas fa-user account"></i></a>'
}
