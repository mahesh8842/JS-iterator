const data=[
{name:'Surya',
age:45,
photo:'https://www.cinejosh.com/newsimg/newsmainimg/suriya-a-hero-off-and-on-screen_b_0504160511.jpg',
lookingfor:'Girl',
Profession:'Actor - Tamil'},
{name:'Prabhas',
age:41,
photo:'https://www.notsoporangi.com/upload/media/entries/2018-06/11/746-0-12fad64ea66aa5787fbfcce858e32cb7.jpg',
lookingfor:'Girl',
Profession:'Actor - Pan India'},
{name:'Anushka',
age:39,
photo:'https://static.toiimg.com/photo/msid-77845912/77845912.jpg?298072',
lookingfor:'Boy',
Profession:'Actor - Telugu'},
{name:'Vijay Sethupathi',
age:37,
photo:'https://static.toiimg.com/thumb/msid-77449942,imgsize-490218,width-800,height-600,resizemode-75/77449942.jpg',
lookingfor:'Girl',
Profession:'Actor - Tamil'},
{name:'Madonna Sebastian',
age:32,
photo:'https://i2.cinestaan.com/image-bank/1500-1500/142001-143000/142772.jpg',
lookingfor:'Boy',
Profession:'Actor - Malayalam'}
];

const profiles=profileScroller(data);

nextProfile();

document.getElementById('next').addEventListener('click',nextProfile);

function nextProfile(){
    const profile=profiles.next().value;
    if(profile!==undefined){

        document.getElementById('profileDisplay').innerHTML=`
        <ul class="list-group">
        <li class="list-group-item"> Name: ${profile.name}</li>
        <li class="list-group-item"> Age: ${profile.age}</li>
        <li class="list-group-item"> Looking For: ${profile.lookingfor}</li>
        <li class="list-group-item"> Profession: ${profile.Profession}</li>
        </ul>`;
        document.getElementById('imageDisplay').innerHTML=`
        <img src="${profile.photo}" class="w-75 p-3">`;

    }else{
        window.location.reload();
    }
}

function profileScroller(profiles){
    let index=0;
    return {
        next:function(){
            return index<profiles.length?{value: profiles[index++],done:false}:
            {done:true}
        }
    };
}




