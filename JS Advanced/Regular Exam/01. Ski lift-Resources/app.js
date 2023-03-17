window.addEventListener('load', solve)

function solve() {
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const peopleCountInput = document.getElementById('people-count');
    const fromDateInput = document.getElementById('from-date');
    const daysCountInput = document.getElementById('days-count');
    const ticketInfoList = document.querySelector('.ticket-info-list');
    const nextBtn = document.getElementById('next-btn');
    const editBtn = document.querySelector('.edit-btn');
    const continueBtn = document.querySelector('.continue-btn');

    nextBtn.addEventListener('click', function (event) {
        event.preventDefault();
        if (!firstNameInput.value || !lastNameInput.value || !peopleCountInput.value || !fromDateInput.value || !daysCountInput.value) {
            return;
        }
        const ticket = document.createElement('li');
        ticket.className = 'ticket';
        const article = document.createElement('article');
        const name = document.createElement('h3');
        name.textContent = 'Name: ' + firstNameInput.value + ' ' + lastNameInput.value;
        const fromDate = document.createElement('p');
        fromDate.textContent = 'From date: ' + fromDateInput.value;
        const days = document.createElement('p');
        days.textContent = 'For ' + daysCountInput.value + ' days';
        const people = document.createElement('p');
        people.textContent = 'For ' + peopleCountInput.value + ' people';
        article.appendChild(name);
        article.appendChild(fromDate);
        article.appendChild(days);
        article.appendChild(people);
        ticket.appendChild(article);
        const editButton = document.createElement('button');
        editButton.className = 'edit-btn';
        editButton.textContent = 'Edit';
        ticket.appendChild(editButton);
        const continueButton = document.createElement('button');
        continueButton.className = 'continue-btn';
        continueButton.textContent = 'Continue';
        ticket.appendChild(continueButton);
        ticketInfoList.appendChild(ticket);
        firstNameInput.value = '';
        lastNameInput.value = '';
        peopleCountInput.value = '';
        fromDateInput.value = '';
        daysCountInput.value = '';
        nextBtn.disabled = true;
        editBtn.disabled = false;
        continueBtn.disabled = false;
    });

    ticketInfoList.addEventListener('click', function (event) {
        const target = event.target;
        const editBtn = document.querySelector('.edit-btn');
        const continueBtn = document.querySelector('.continue-btn');

        if (target.className === 'edit-btn') {
            const ticket = target.parentNode;
            const name = ticket.querySelector('h3').textContent;
            const firstName = name.split(':')[1].split(' ')[1];
            const lastName = name.split(':')[1].split(' ')[2];
            const fromDate = ticket.querySelector('p:nth-of-type(1)').textContent.split(':')[1].trim();
            const daysCount = ticket.querySelector('p:nth-of-type(2)').textContent.split(' ')[1];
            const peopleCount = ticket.querySelector('p:nth-of-type(3)').textContent.split(' ')[1];
            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            peopleCountInput.value = peopleCount;
            fromDateInput.value = fromDate;
            daysCountInput.value = daysCount;
            ticket.parentNode.removeChild(ticket);
            nextBtn.disabled = false;
            editBtn.disabled = true;
            continueBtn.disabled = true;
        } else if (target.className === 'continue-btn') {
            const ticketInfoList = document.querySelector('.ticket-info-list');
            const confirmTicket = document.querySelector('.confirm-ticket');

            const listItem = ticketInfoList.querySelector('li').cloneNode(true);
            listItem.querySelector('.edit-btn').remove();
            listItem.querySelector('.continue-btn').remove();

            editBtn.parentNode.remove();
            continueBtn.parentNode.remove();

            confirmTicket.innerHTML = '';
            confirmTicket.appendChild(listItem);
            const confirmBtn = document.createElement('button');
            const cancelBtn = document.createElement('button');
            confirmBtn.classList.add('confirm-btn');
            cancelBtn.classList.add('cancel-btn');
            confirmBtn.textContent = 'Confirm';
            cancelBtn.textContent = 'Cancel';
            confirmTicket.appendChild(confirmBtn);
            confirmTicket.appendChild(cancelBtn);

            confirmBtn.addEventListener('click', function () {
                const main = document.querySelector('#main');
                main.parentNode.removeChild(main);
                const body = document.querySelector('#body');
                const thankYou = document.createElement('h1');
                const backBtn = document.createElement('button');
                thankYou.textContent = 'Thank you, have a nice day!';
                thankYou.setAttribute('id', 'thank-you');
                backBtn.textContent = 'Back';
                backBtn.setAttribute('id', 'back-btn');
                body.appendChild(thankYou);
                body.appendChild(backBtn);

                backBtn.addEventListener('click', function () {
                    location.reload();
                });
            });
        } else if (target.className === 'cancel-btn') {
            const listItem = confirmTicket.querySelector('li');

            confirmTicket.removeChild(listItem);

            const btnContainer = document.querySelector('.btn-container');
            btnContainer.appendChild(editBtn);
            btnContainer.appendChild(continueBtn);

            nextBtn.disabled = false;
        }
    });
}




