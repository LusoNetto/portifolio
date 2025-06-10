export const handleEmail = () => {
        const emailAddress = 'lusonetto137@outlook.com';
        const subject = 'Olá tenho interesse profissional';
        const body = 'Olá, ví seu portifólio e quero conversar sobre uma proposta...';

        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink);
};