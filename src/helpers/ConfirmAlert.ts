export enum EntityTypeEnum {
    Card = 'carte',
    List = 'liste'
};

export const isConfirmAlertConfirmed = (entityType: EntityTypeEnum, title: string) => {
    return window.confirm(
        `Vous allez supprimer la ${entityType} nommée ${title}.\nAppuyer sur "OK" pour continuer.\nOu sur "Annuler" pour fermer.`
    );
}