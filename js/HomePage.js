let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const innerHtml = `
<tr>
    <th></th>
    <th>Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Start</th>
    <th>Actions</th>
</tr>
<tr>
    <td><img class="profile" alt="" 
            src="..\assets\Ellipse -4.png">
    </td>
    <td>Mayur Kalekar</td>
    <td>Male</td>
    <td><div class='dept-label'>HR</div>
        <div class='dept-label'>Engineer</div></td>
    <td>300000</td>
    <td>1 Nov 2020</td>
    <td>
        <img id="1" onclick="remove(this)" alt="delete"
        src="..\assets\delete_black_18dp.svg">
        <img id="1" alt="edit" onclick="update(this)"
        src="..\assets\edit_black_18dp.svg">
    </td>    
</tr>
`;
document.querySelector('#table-display').innerHTML = innerHtml
}