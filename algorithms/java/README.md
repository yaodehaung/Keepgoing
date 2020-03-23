LinkedList與ArrayList的比較
面試時ArrayList時經常拿來和LinkedList比較，以下是兩者的差異點：

ArrayList的實作是陣列(Array)，資料以連續的方式儲存在記憶體，可支援隨機存取及循序存取，所以循序讀取或排序(sort)時的效能好。每個節點不用另外儲存下一個節點的指標，每個節點所占用的記憶體較少，但也因為是線性儲存，所以在串列中插入或刪除節點時的效能差，因為必須移動大量節點的索引。而新增的元素超過原本的長度時要配置新的陣列並將舊陣列複製過去，此時占用的記憶體也會比較大。
LinkedList的實作是雙鏈接串列(Double-linked List)，資料以不連續的方式儲存，因此不需使用連續的記憶體空間，也不需事先指定串列大小。每個節點都會記錄著下個節點的指標，所以在串列中插入或刪除節點時只需修改相關節點的指標，插入或刪除的效能較好。因非線性儲存，讀取時無法快速索引到該節點，只能以循序存取讀取每一個節點的指標，一個一個節點往下找，所以讀取的效能較差。又每個節點額外記錄著下個節點的指標，占記憶體比較大。每個節點是透過指標來連結彼此，所以一旦指標斷裂會造成資料遺失，可靠度較差。
LinkedList與ArrayList都是非執行緒安全的。
LinkedList與ArrayList都允許重複且為null的元素。
因此在使用時機上，若只需要讀取List中的元素或做排序，就使用ArrayList。若需要經常新增或刪除List中的元素，就使用LinkedList。

