import React, { Component } from 'react';
export default class DescriptionDetail extends Component{
    render(){
        return(
            <React.Fragment>
            <h1>設定方法</h1>
            <hr/>
            <h2>自動アップロード実施時刻</h2>
            ①20:00に共有サーバからCDRダウンロードサイトへアップロード<br />
            ②20:30に共有サーバからCDRダウンロードサイトへアップロード<br />
            ③21:00に共有サーバのcdrupload\uploadフォルダからcdrupload\finishフォルダへ移動<br />
            <font color="red"><b>※20時から21時の間にcdrupload\uploadへのファイル配置は禁止</b></font><br />
            <br />
            <hr/>
            <h2>自動アップロードの流れ</h2>
            ①CDRデータファイル、請求書PDFファイル等を配置<br />
            <br />
            \\192.168.10.105\cdrupload<br />
            ※アクセスできない人は、Andoさんへ権限を追加してもらうこと。<br />
            <br />
            フォルダ構成<br />
            \\192.168.10.105\cdrupload<br />
            ┣upload　←この中にアップロードしたいCDRデータ、請求書データを配置する<br />
            ┗finish　←アップロードが完了したファイルはこの中に移動する<br />
            <br />
            <br />
            ②アップロードされたファイルを1個ずつ取り込む<br />
            <br />
            ファイル名からDBへ登録する。<br />
            <br />
            1000000148_201709CDR_Cloco株式会社NTTその他.csv<br />
            会社コード_yyyymm種別_任意の会社名.拡張子<br />
            <br />
            種別は、以下<br />
            ・CDR<br />
            ・請求書<br />
            ・その他<br />
            <br />
            上記３に当てはまらない場合は、「未設定」で登録する<br />
            <br />
            <hr/>
            <h2>自動アップロードの準備</h2>
            WinSCPのインストール<br />
            https://forest.watch.impress.co.jp/library/software/winscp/<br />
            <br />
            Cドライブ直下にbatchフォルダを作成し、以下の３ファイルを設置<br />
            <br />
            upload.bat<br />
            ↓<br />
            "C:\Program Files (x86)\WinSCP\WinSCP.exe" /console /script="C:\batch\upload.ftp"<br />
            <br />
            upload.ftp<br />
            ↓<br />
            option batch on<br />
            open sftp://england:england0032@153.126.156.140:22<br />
            ascii<br />
            cd /var/www/cdr.ameyoj.jp/public_html/app/webroot/uploaddata<br />
            mput Y:upload\*.*<br />
            bye<br />
            <br />
            move.bat<br />
            ↓<br />
            cd c:\batch<br />
            move Y:\upload\*.* Y:\finish<br />
            exit<br />
            <br />
            ※ネットワークドライブの割当をZドライブで設定している<br />
            <br />
            <br />
            <hr />
            <h2>タスクスケジューラの設定</h2><br />
            ①自動アップロード（毎日1回午後20時に実行）<br />
            ②自動アップロード（毎日1回午後20時30分に実行）<br />
            ③アップロード対象フォルダからアップロード済みフォルダへ移動（毎日1回午後21時に実行）<br />
            <br />
            
            <Img src="./images/task01.jpg" alt="task 1 image" /><br />
            <br />
            <Img src="./images/task02.jpg" alt="task 2 image" /><br />
            <br />
            <Img src="./images/task02-1.jpg" alt="task 2.1 image" /><br />
            <br />
            <Img src="./images/task03.jpg" alt="task 3 image" /><br />
            <br />
            <Img src="./images/task03-1.jpg" alt="task 3.1 image" /><br />
            <br />
            <Img src="./images/task04.jpg" alt="task 4 image" /><br />
            <br />
            <Img src="./images/task05.jpg" alt="task 5 image" /><br />
            <br />
            <Img src="./images/task06.jpg" alt="task 6 image" /><br />
            <br />
            
            <hr/>
            <h2>ダウンロードサイトファイル取込</h2><br />
            /var/www/cdr.ameyoj.jp/public_html/app/webroot/uploaddataにアップロードされたファイルを<br />
            ファイル名等をDB登録後、会社コード別のフォルダへ移動する。<br />
            <br />
            Cron設定は以下<br />
            /etc/cron.d/cdr_move<br />
            */30 * * * * root wget -O - --append-output=/var/log/cdr_batch.log https://cdr.ameyoj.jp/Batchs/index >> /var/log/cdr_batch.log<br />
            <br />
            30分に1回取込処理を実施している<br />
            手動でFTPアップロードすればタスクスケジューラ実施以外でも取込は可能<br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            </React.Fragment>            
            
        )
    }
}



 const  Img=(props)=>{
 return (
    <img src={props.src} alt={props.alt }/>
 )   
}
