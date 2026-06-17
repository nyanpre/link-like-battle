// src/components/screens/DeckManager.tsx
import React, { useState, useEffect } from 'react';
import { saveDecksToDB, loadDecksFromDB } from '../../utils/firebase';
import { Save, Edit, Check, X } from 'lucide-react';

interface DeckManagerProps {
  user: any;
  deckList: Record<string, number>;
  setDeckList: React.Dispatch<React.SetStateAction<Record<string, number>>>;
  selectedUnit: string | null;
  setSelectedUnit: React.Dispatch<React.SetStateAction<string | null>>;
  currentDeckName: string;
  setCurrentDeckName: React.Dispatch<React.SetStateAction<string>>;
}

interface SavedDeck {
  name: string;
  unit: string;
  deckList: Record<string, number>;
}

export const DeckManager: React.FC<DeckManagerProps> = ({ 
  user, deckList, setDeckList, selectedUnit, setSelectedUnit, currentDeckName, setCurrentDeckName 
}) => {
  const [savedDecks, setSavedDecks] = useState<(SavedDeck | null)[]>([null, null, null, null, null]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState<'save' | 'list' | null>(null);
  
  // 一覧での名前編集用State
  const [editSlotIndex, setEditSlotIndex] = useState<number | null>(null);
  const [editDeckName, setEditDeckName] = useState('');

  useEffect(() => {
    if (user) {
      loadDecksFromDB(user.uid).then(decks => {
        const padded = [...decks];
        while (padded.length < 5) padded.push(null);
        setSavedDecks(padded.slice(0, 5));
      });
    }
  }, [user]);

  const handleSaveToSlot = async (slotIndex: number) => {
    if (!selectedUnit || Object.keys(deckList).length === 0) {
      alert('デッキが空か、ユニットが選択されていません。');
      return;
    }
    const newName = currentDeckName || `デッキ ${slotIndex + 1}`;
    const newDecks = [...savedDecks];
    newDecks[slotIndex] = { name: newName, unit: selectedUnit, deckList };
    
    setLoading(true);
    try {
      await saveDecksToDB(user.uid, newDecks);
      setSavedDecks(newDecks);
      setCurrentDeckName(newName);
      setShowModal(null);
      alert('デッキを保存しました！');
    } catch (e) {
      alert('保存に失敗しました。');
    }
    setLoading(false);
  };

  const handleLoad = (slotIndex: number) => {
    const target = savedDecks[slotIndex];
    if (!target) return;
    if (window.confirm(`「${target.name}」を読み込みますか？\n（現在の編集内容は失われます）`)) {
      setSelectedUnit(target.unit);
      setDeckList(target.deckList);
      setCurrentDeckName(target.name);
      setShowModal(null);
    }
  };

  const handleSaveEditName = async (slotIndex: number) => {
    const target = savedDecks[slotIndex];
    if (!target) return;
    
    const newName = editDeckName || `デッキ ${slotIndex + 1}`;
    const newDecks = [...savedDecks];
    newDecks[slotIndex] = { ...target, name: newName };

    setLoading(true);
    try {
      await saveDecksToDB(user.uid, newDecks);
      setSavedDecks(newDecks);
      setEditSlotIndex(null);
      if (currentDeckName === target.name) {
        setCurrentDeckName(newName);
      }
    } catch (e) {
      alert('名前の変更に失敗しました。');
    }
    setLoading(false);
  };

  return (
    <div style={{ display: 'flex', gap: '0.4rem' }}>
      <button onClick={() => setShowModal('list')} style={{ padding: '0.2rem 0.6rem', fontSize: '0.7rem', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px' }}>
        <Edit size={14} /> デッキ編集
      </button>
      <button onClick={() => setShowModal('save')} style={{ padding: '0.2rem 0.6rem', fontSize: '0.7rem', background: '#10b981', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px' }}>
        <Save size={14} /> デッキ保存
      </button>

      {/* モーダルUI */}
      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div style={{ background: '#1f2937', padding: '24px', borderRadius: '12px', width: '420px', color: 'white', border: '1px solid #374151' }}>
            <h3 style={{ marginTop: 0, borderBottom: '1px solid #374151', paddingBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              {showModal === 'save' ? <><Save size={20} /> 現在のデッキを保存 (最大5枠)</> : <><Edit size={20} /> デッキ一覧 / 編集</>}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
              {savedDecks.map((deck, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#374151', padding: '10px 12px', borderRadius: '6px' }}>
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px', marginRight: '10px', overflow: 'hidden' }}>
                    <span style={{ fontWeight: 'bold', color: '#9ca3af', flexShrink: 0 }}>{i + 1}</span>
                    
                    {editSlotIndex === i ? (
                      <input 
                        type="text" 
                        value={editDeckName} 
                        onChange={e => setEditDeckName(e.target.value)} 
                        maxLength={15}
                        style={{ width: '100%', padding: '4px 8px', borderRadius: '4px', border: '1px solid #3b82f6', background: '#1f2937', color: 'white', outline: 'none' }}
                        autoFocus
                      />
                    ) : (
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: deck ? 'white' : '#6b7280' }}>
                        {deck ? deck.name : '空き枠'}
                      </span>
                    )}
                  </div>

                  <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
                    {showModal === 'list' ? (
                      editSlotIndex === i ? (
                        <>
                          <button onClick={() => handleSaveEditName(i)} disabled={loading} style={{ padding: '4px 8px', background: '#10b981', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}><Check size={14}/></button>
                          <button onClick={() => setEditSlotIndex(null)} disabled={loading} style={{ padding: '4px 8px', background: '#6b7280', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}><X size={14}/></button>
                        </>
                      ) : (
                        <>
                          <button onClick={() => { setEditSlotIndex(i); setEditDeckName(deck?.name || `デッキ ${i + 1}`); }} disabled={loading || !deck} style={{ padding: '4px 8px', background: '#6b7280', color: 'white', border: 'none', borderRadius: '4px', cursor: (!deck) ? 'not-allowed' : 'pointer', opacity: (!deck) ? 0.3 : 1 }}>編集</button>
                          <button onClick={() => handleLoad(i)} disabled={loading || !deck} style={{ padding: '4px 8px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: (!deck) ? 'not-allowed' : 'pointer', opacity: (!deck) ? 0.3 : 1 }}>読込</button>
                        </>
                      )
                    ) : (
                      <button 
                        onClick={() => handleSaveToSlot(i)}
                        disabled={loading}
                        style={{ padding: '4px 12px', background: '#10b981', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                      >
                        {deck ? '上書き' : '保存'}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '20px', textAlign: 'right' }}>
              <button onClick={() => { setShowModal(null); setEditSlotIndex(null); }} style={{ padding: '8px 16px', background: 'transparent', color: '#9ca3af', border: '1px solid #4b5563', borderRadius: '6px', cursor: 'pointer' }}>
                閉じる
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};