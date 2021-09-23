let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList =getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () =>{
    return localStorage.getItem('EmployeePayrollList') ?
                            JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}
const createInnerHtml = () => {
    //if(empPayrollList==0)return; 
    const headerHtml =
    "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
    "<th>Salary</th><th>Start Date</th><th>Actions</th>";

    let innerHtml =`${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
   
    for(const empPayrollData of empPayrollList) {
     innerHtml = `${innerHtml}

    <tr>
    <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
    <td>${empPayrollData._name}</td>
    <td>${empPayrollData._gender}</td>
    <td>${getDeptHtml(empPayrollData._department)}</td>
    <td>${empPayrollData._salary}</td>
    <td>${empPayrollData._startDate}</td>
    <td>
        <img id="${empPayrollData._id}" onclick="remove(this)"
                src="../assets/delete_black_18dp.svg"">
        <img id="${empPayrollData._id}" onclick="update(this)"
                src="../assets/edit_black_18dp.svg" alt="edit">
    </td>
    </tr>
    `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}


const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
          _name:'Narayan Mahadevan',
          _gender: 'male',
          _department: [
              'Engineering',
              'Finance'
          ],
          _salary: '500000',
          _startDate: '29 Oct 2019',
          _note: '',
          _id: new Date().getTime(),
          _profilePic: '../assets/Ellipse -1.png'
        },
        {
            _name:'Bill Gates',
          _gender: 'female',
          _department: [
              'Sales'
          ],
          _salary: '400000',
          _startDate: '2 Oct 2020',
          _note: '',
          _id: new Date().getTime() + 1,
          _profilePic: '../assets/Ellipse -4.png'
        }
        ];
        return empPayrollListLocal;
 }

 const getDeptHtml = (deptList) => {
     let deptHtml = '';
     for (const dept of deptList) {
         deptHtml = `${deptHtml} <dic class='dept-label'>${dept}</div>`
     }
     return deptHtml;
 }
const remove = (node)=>{
    let empPayrollData = empPayrollList.find(empData=>empData._id==node.id);
    if(!empPayrollData) return;
    const index = empPayrollList
                    .map(empData=>empData._id)
                    .indexOf(empPayrollData._id);
    empPayrollList.splice(index,1);
    localStorage.setItem("EmployeePayrollList",JSON.stringify(empPayrollList));
    document.querySelector(".emp-count").textContent = empPayrollList.length;
}