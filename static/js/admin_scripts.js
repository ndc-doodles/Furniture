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