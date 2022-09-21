export interface IListItemProps<T> {
    data: T,
    remove: (post: T) => void;
    update: (post: T) => void;
}
