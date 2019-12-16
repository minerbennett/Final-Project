function changePicture(){
    if(document.getElementById('games').checked){
        document.getElementById("picture").src = "data:image/jpeg;base64,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";
        
        if(document.getElementById('Intel').checked){
            document.getElementById("picture").src = "data:image/png;base64,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";
            
            if(document.getElementById('nvidia').checked){
                document.getElementById("picture").src = "https://cdn.pcpartpicker.com/static/forever/images/userbuild/269732.e81a077c541813a179878d47dc734600.1600.jpg";
                
                if(document.getElementById('budget').checked){
                    document.getElementById("picture").src = "https://cdn.pcpartpicker.com/static/forever/images/userbuild/274168.dcd8a03fdcef1fbeed20ecc86df910d4.512.jpg";
                }              
                else if(document.getElementById('decent').checked){
                    document.getElementById("picture").src = "https://mail.google.com/mail/u/0?ui=2&ik=407f6e0a6f&attid=0.1&permmsgid=msg-f:1652940256451529549&th=16f06c67d4bc8b4d&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ8H05zw_mSnSWrLkMl5Lr_OVFKTmwEuhDFtzbDzCieQo4sM8E9YWtbHN1_QBI89ozrweyClwZCQxZfC1R8zr6kYQc00zVBFZyfBfQxXH0iibgRRfcvxwC8xGj8&disp=emb&realattid=16f06c086f5bf5bd2a1";
                }
                else if(document.getElementById('modest').checked){
                    document.getElementById("picture").src = "https://cdn.pcpartpicker.com/static/forever/images/userbuild/275647.62e12377adeb7ba0a9616f41c1724eca.512.jpg";
                }
                else if(document.getElementById('great').checked){
                    document.getElementById("picture").src = "https://cdn.pcpartpicker.com/static/forever/images/userbuild/275656.96701d78ca9345af4c201276f4f0dd58.512.jpg";
                }
            }
            else if(document.getElementById('radeon').checked){
                document.getElementById("picture").src = "https://cdn.pcpartpicker.com/static/forever/images/userbuild/260758.86cb063a1e924c864d86d2d7bc8483cc.1600.jpg";
                
                if(document.getElementById('budget').checked){
                    document.getElementById("picture").src = "";
                }              
                else if(document.getElementById('decent').checked){
                    document.getElementById("picture").src = "https://mail.google.com/mail/u/0?ui=2&ik=407f6e0a6f&attid=0.1&permmsgid=msg-f:1652940256451529549&th=16f06c67d4bc8b4d&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ8H05zw_mSnSWrLkMl5Lr_OVFKTmwEuhDFtzbDzCieQo4sM8E9YWtbHN1_QBI89ozrweyClwZCQxZfC1R8zr6kYQc00zVBFZyfBfQxXH0iibgRRfcvxwC8xGj8&disp=emb&realattid=16f06c086f5bf5bd2a1";
                }
                else if(document.getElementById('modest').checked){
                    document.getElementById("picture").src = "";
                }
                else if(document.getElementById('great').checked){
                    document.getElementById("picture").src = "";
                }
            }
        }else if (document.getElementById('Ryzen').checked){
            document.getElementById("picture").src = "";
            if(document.getElementById('nvidia').checked){
                document.getElementById("picture").src = "";
                
                if(document.getElementById('budget').checked){
                    document.getElementById("picture").src = "";
                }              
                else if(document.getElementById('decent').checked){
                    document.getElementById("picture").src = "";
                }
                else if(document.getElementById('modest').checked){
                    document.getElementById("picture").src = "";
                }
                else if(document.getElementById('great').checked){
                    document.getElementById("picture").src = "";
                }
            }
            else if(document.getElementById('radeon').checked){
                document.getElementById("picture").src = "";
                
                if(document.getElementById('budget').checked){
                    document.getElementById("picture").src = "";
                }              
                else if(document.getElementById('decent').checked){
                    document.getElementById("picture").src = "";
                }
                else if(document.getElementById('modest').checked){
                    document.getElementById("picture").src = "";
                }
                else if(document.getElementById('great').checked){
                    document.getElementById("picture").src = "";
                }
            }
        }
    }if(document.getElementById('edit').checked){
        document.getElementById("picture").src = "";
        
        if(document.getElementById('Intel').checked){
            document.getElementById("picture").src = "";
            
            if(document.getElementById('nvidia').checked){
                document.getElementById("picture").src = "";
                
                if(document.getElementById('budget').checked){
                    document.getElementById("picture").src = "";
                }              
                else if(document.getElementById('decent').checked){
                    document.getElementById("picture").src = "";
                }
                else if(document.getElementById('modest').checked){
                    document.getElementById("picture").src = "";
                }
                else if(document.getElementById('great').checked){
                    document.getElementById("picture").src = "";
                }
            }
            else if(document.getElementById('radeon').checked){
                document.getElementById("picture").src = "";
                
                if(document.getElementById('budget').checked){
                    document.getElementById("picture").src = "";
                }              
                else if(document.getElementById('decent').checked){
                    document.getElementById("picture").src = "";
                }
                else if(document.getElementById('modest').checked){
                    document.getElementById("picture").src = "";
                }
                else if(document.getElementById('great').checked){
                    document.getElementById("picture").src = "";
                }
            }
        }else if (document.getElementById('Ryzen').checked){
            document.getElementById("picture").src = "";
            if(document.getElementById('nvidia').checked){
                document.getElementById("picture").src = "";
                
                if(document.getElementById('budget').checked){
                    document.getElementById("picture").src = "";
                }              
                else if(document.getElementById('decent').checked){
                    document.getElementById("picture").src = "";
                }
                else if(document.getElementById('modest').checked){
                    document.getElementById("picture").src = "";
                }
                else if(document.getElementById('great').checked){
                    document.getElementById("picture").src = "";
                }
            }
            else if(document.getElementById('radeon').checked){
                document.getElementById("picture").src = "";
                
                if(document.getElementById('budget').checked){
                    document.getElementById("picture").src = "";
                }              
                else if(document.getElementById('decent').checked){
                    document.getElementById("picture").src = "";
                }
                else if(document.getElementById('modest').checked){
                    document.getElementById("picture").src = "";
                }
                else if(document.getElementById('great').checked){
                    document.getElementById("picture").src = "";
                }
            }
        }
    }
}