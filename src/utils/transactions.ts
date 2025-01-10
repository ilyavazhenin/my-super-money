
export const formatDateToDDMMYYYY = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
};

export function formatMoneySum(value: number): string {
    const formattedValue = value.toFixed(2);
    const [integerPart, fractionalPart] = formattedValue.split('.');
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    const formattedFractionalPart = fractionalPart === '00' ? '' : fractionalPart;

    return `${formattedIntegerPart}${formattedFractionalPart ? `.${formattedFractionalPart}` : ''}`;
}
