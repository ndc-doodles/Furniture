   function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('-translate-x-full');
  }








   function toggleSidebar() {
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.toggle('-translate-x-full');
    }

    function deleteRow(btn) {
      if (confirm('Are you sure you want to delete this submission?')) {
        const row = btn.closest('tr');
        row.remove();
        // TODO: Integrate with backend (AJAX or Django view) for actual delete
      }
    }









 
  let currentEditRow = null;

  function openEditModal(row) {
    currentEditRow = row;
    const categoryName = row.querySelector('.category-name').innerText;
    document.getElementById('editCategoryName').value = categoryName;
    document.getElementById('editModal').classList.remove('hidden');
  }

  function closeEditModal() {
    document.getElementById('editModal').classList.add('hidden');
  }

  document.getElementById('editForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const updatedName = document.getElementById('editCategoryName').value;
    if (currentEditRow) {
      currentEditRow.querySelector('.category-name').innerText = updatedName;
    }
    closeEditModal();
  });
