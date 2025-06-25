export const formatDate = (date: Date | string): string => {
    const d = typeof date === 'string' ? new Date(date) : date;

    return d.toLocaleDateString('uk-UA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
};
