import React from 'react';
import DataGrid, {
    Column,
    Pager,
    Paging,
  } from 'devextreme-react/data-grid';
  import ODataStore from 'devextreme/data/odata/store';
  import DataSource from 'devextreme/data/data_source';
  
  
function ToDoList() {

    const pageSizes = [10, 25, 50, 100];

    const dataSource = new DataSource({ 
      store:new ODataStore({
        url: 'https://jsonplaceholder.typicode.com/todos',
        key: 'id', 
      }),
    });


    return (
        
            <DataGrid
        dataSource={dataSource}
      >
         <Column dataField="userId"  />
         <Column dataField="id"  />
         <Column dataField="title" />
         <Column dataField="completed"  />
         <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
        <Paging defaultPageSize={10} />
      </DataGrid>
      
        
    )
}
export default ToDoList;