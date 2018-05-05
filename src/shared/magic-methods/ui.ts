declare const $: any;





    export const run = () => {
        $(document).ready(() => {
            $('#datatable').DataTable();

            const table = $('#datatable-buttons').DataTable({
                lengthChange: false,
                buttons: ['copy', 'excel', 'pdf', 'colvis']
            });

            table.buttons().container()
                .appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)');
        } );
    };


