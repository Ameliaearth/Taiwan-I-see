$(document).ready(function() {
    $('#filterInput').on('input', function() {
        var filterValue = $(this).val().toLowerCase();
        // 收索卡片
        $('#cardContainer .jq-card').each(function() {
            var cardText = $(this).text().toLowerCase();
            if (cardText.includes(filterValue)) {
                $(this).show(); // 符合條件，顯示卡片
            } else {
                $(this).hide(); // 不符合條件，隐藏卡片
            }
        });
    });
});
