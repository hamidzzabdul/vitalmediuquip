// export const formatDate = (date) => {
//     const dateObj = new Date(date);
//     const formattedDate = dateObj.toLocaleDateString();
//     return formattedDate;
// }

export const formatDate = (date) => {
    const dateObj = new Date(date);

    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = dateObj.toLocaleDateString(undefined, options);

    return formattedDate;
}