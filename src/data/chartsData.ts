import colors from "@/utils/colors"

export const TaskIndicators = [
    {
        value: 28,
        label: 'اكتملت في الموعد',
        color: colors.green
    },
    {
        value: 4,
        label: 'تجاوزت الموعد',
        color: colors.violet
    },
    {
        value: 12,
        label: 'مجدولة',
        color: colors.lightgray
    },
]

export const MeetingIndicators = [
    {
        value: 28,
        label: 'اكتملت',
        color: colors.green
    },
    {
        value: 4,
        label: 'مجدولة',
        color: colors.lightgray
    },
    {
        value: 12,
        label: 'لم تكتمل',
        color: colors.violet
    },
]

export const ItemsIndicators = [
    {
        value: 18,
        label: 'بنود مقترحة',
        color: colors.green
    },
    {
        value: 4,
        label: 'بنود مؤجلة',
        color: colors.violet
    },
    {
        value: 2,
        label: 'بنود محولة',
        color: colors.lightgray
    },
]