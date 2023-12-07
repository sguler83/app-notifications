const notifications = [
    {
        user:{
            name: 'Serhat G.',
            profile_image: 'https://avatars.githubusercontent.com/u/46748642?v=4'
        },
        text: 'Comleted for challenges',
        time: 'Just now',
        is_new: false
    },
    {
        user:{
            name: 'Mesude G.',
            profile_image: 'https://avatars.githubusercontent.com/u/46748642?v=4'
        },
        text: 'Comleted for challenges',
        time: 'Just now',
        is_new: true
    },
    {
        user:{
            name: 'Furkan G.',
            profile_image: 'https://avatars.githubusercontent.com/u/46748642?v=4'
        },
        text: 'Comleted for challenges',
        time: 'Just now',
        is_new: true
    },
    {
        user:{
            name: 'Serhat G.',
            profile_image: 'https://avatars.githubusercontent.com/u/46748642?v=4'
        },
        text: 'Comleted for challenges',
        time: 'Just now',
        is_new: false
    }
];

const newNotifications = [
    {
        user:{
            name: 'Serhat G.',
            profile_image: 'https://avatars.githubusercontent.com/u/46748642?v=4'
        },
        text: 'Comleted for challenges',
        time: 'Just now',
        is_new: false
    },
    {
        user:{
            name: 'Mesude G.',
            profile_image: 'https://avatars.githubusercontent.com/u/46748642?v=4'
        },
        text: 'Comleted for challenges',
        time: 'Just now',
        is_new: true
    }
];

const notificationWrapper = document.getElementById('notification-wrapper');
const mainWrapper = document.getElementById('main-wrapper');
const fancyBtn = document.getElementById('fancy-btn');
const viewBtn = document.getElementById('view-btn');

fancyBtn.addEventListener('click', () => {
    mainWrapper.classList.toggle('scale-0');
});

viewBtn.addEventListener('click', () => {
    viewBtn.classList.add('hidden');
    newNotifications.forEach(notification => {
        addNotificationsToWrapper(notification);
    });
});

notifications.forEach(notification => {
    addNotificationsToWrapper(notification);
});

function addNotificationsToWrapper(notification){
    const element = document.createElement('div');
    element.className = 'flex p-4 md:p-6 gap-4 md:gap-6 relative';

    element.innerHTML = `<img class="rounded-full w-12 h-12 md:w-16 md:h-16" src="${notification.user.profile_image}" alt="${notification.user.name}">
    <div class="space-y-1">
        <strong>${notification.user.name}</strong>
        <p>${notification.text} <a class="text-pink-600 font-semibold" href="www.warsraw.com">warsraw.com</a></p>
        <small class="text-violet-200 block">${notification.time}</small>
    </div>
    ${notification.is_new ? '<span class="bg-blue-500 text-xs font-bold px-3 py-1 rounded-full absolute top-4 md:top-6 right-4 md:right-6 tracking-wide uppercase">NEW</span>' : ''}`;

    notificationWrapper.appendChild(element);
}